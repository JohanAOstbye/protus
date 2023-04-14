'use client'
import { Button } from 'components/elements/Button'
import { Input } from 'components/elements/Input'
import { trpc } from 'lib/server/trpc/provider'
import { useState, useEffect } from 'react'
import style from 'styles/pages/_newUserPage.module.scss'
import { SelectionButton } from 'components/elements/SelectionButton'
import RangeSlider from 'components/elements/RangeSlider'
import React from 'react'
import { ProjectInformation } from 'lib/assets/ProjectInformation'

import { UserDetails as UD } from '@prisma/client'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Loading from 'components/elements/Loading'

type UserDetails = Omit<UD, 'id' | 'userId'> & { code: string }

const vaildateUserDetails = (
  userDetails: Partial<UserDetails> & { additionalDevices: string[] }
):
  | { data: UserDetails; success: true }
  | { success: false; error: { message: string } } => {
  if (
    typeof userDetails.code !== 'undefined' &&
    typeof userDetails.ntnuStudent !== 'undefined' &&
    typeof userDetails.studyProgram !== 'undefined' &&
    typeof userDetails.mainDevice !== 'undefined' &&
    typeof userDetails.experience !== 'undefined' &&
    typeof userDetails.interest !== 'undefined'
  ) {
    return {
      success: true,
      data: {
        code: userDetails.code,
        ntnuStudent: userDetails.ntnuStudent,
        studyProgram: userDetails.studyProgram,
        mainDevice: userDetails.mainDevice,
        additionalDevices: userDetails.additionalDevices,
        experience: userDetails.experience,
        interest: userDetails.interest,
      },
    }
  }
  return { success: false, error: { message: 'moren din er feit, lol' } }
}

export const NewUserPage = () => {
  const { data: session, status, update } = useSession({ required: true })
  const [readInformation, setReadInformation] = React.useState(true)
  const [userDetails, setUserDetails] = useState<
    Partial<UserDetails> & { additionalDevices: string[] }
  >({ additionalDevices: [] })
  const [loading, setLoading] = useState(false)
  const mutation = trpc.user.new.useMutation()
  const updateMutation = async () => {
    setLoading(true)
    const validator = vaildateUserDetails(userDetails)
    if (validator.success) {
      mutation.mutateAsync(validator.data).then(() => {
        update({ code: validator.data.code })
      })
    }
  }

  useEffect(() => {
    if (
      session &&
      session.user &&
      session.user.code !== null &&
      session.user.code !== undefined
    ) {
      redirect('/')
    }
  }, [session])

  if (loading) return <Loading />

  return readInformation ? (
    <div className={style.newUserPage}>
      <ProjectInformation />
      <Button
        onClick={() => {
          setReadInformation(!readInformation)
        }}
        text="Accept"
      />
    </div>
  ) : (
    <div className={style.newUserPage}>
      <h1>Survey (1min)</h1>
      <Button
        onClick={() => setReadInformation(!readInformation)}
        text="Back"
      />
      <div className={style.textQuestions}>Code recieved:</div>
      <Input
        value={userDetails.code}
        type="text"
        placeholder="Code:"
        onChange={(e) =>
          setUserDetails({ ...userDetails, code: e.target.value })
        }
      />

      <div className={style.questionnaire}>
        <div className={style.textQuestions}>Do you study at NTNU?</div>
        <div className={style.radioGroups}>
          <SelectionButton
            type={'radio'}
            changed={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({
                ...userDetails,
                ntnuStudent: e.target.value,
              })
            }
            isSelected={userDetails.ntnuStudent === 'Yes'}
            group={'study'}
            label={'Yes'}
            value={'Yes'}
          />
          <SelectionButton
            type={'radio'}
            changed={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({
                ...userDetails,
                ntnuStudent: e.target.value,
              })
            }
            isSelected={userDetails.ntnuStudent === 'No'}
            group={'study'}
            label={'No'}
            value={'No'}
          />
        </div>

        <div className={style.textQuestions}>What is your field of study?</div>
        <Input
          placeholder="Ex: mathematics:"
          value={userDetails.studyProgram}
          onChange={(e) => {
            setUserDetails({ ...userDetails, studyProgram: e.target.value })
          }}
        />
        <div className={style.textQuestions}>
          How many years experience do you have with coding?
        </div>
        <RangeSlider
          min={0}
          max={10}
          value={userDetails.experience!}
          changed={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserDetails({
              ...userDetails,
              experience: parseInt(e.target.value),
            })
          }}
        />
        <div className={style.textQuestions}>
          What is your main device for study?
        </div>
        <div className={style.selectionGroups}>
          <SelectionButton
            type={'radio'}
            changed={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({
                ...userDetails,
                mainDevice: e.target.value,
                additionalDevices: userDetails.additionalDevices.filter(
                  (device) => device !== 'Computer'
                ),
              })
            }
            isSelected={userDetails.mainDevice === 'Computer'}
            group={'mainDevice'}
            label={'Computer'}
            value={'Computer'}
          />
          <SelectionButton
            type={'radio'}
            changed={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({
                ...userDetails,
                mainDevice: e.target.value,
                additionalDevices: userDetails.additionalDevices.filter(
                  (device) => device !== 'Mobile'
                ),
              })
            }
            isSelected={userDetails.mainDevice === 'Mobile'}
            group={'mainDevice'}
            label={'Mobile'}
            value={'Mobile'}
          />
          <SelectionButton
            type={'radio'}
            changed={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({
                ...userDetails,
                mainDevice: e.target.value,
                additionalDevices: userDetails.additionalDevices.filter(
                  (device) => device !== 'Tablet'
                ),
              })
            }
            isSelected={userDetails.mainDevice === 'Tablet'}
            group={'mainDevice'}
            label={'Tablet'}
            value={'Tablet'}
          />
        </div>
        <div className={style.textQuestions}>
          Do you use other devices to study?
        </div>
        <div className={style.selectionGroups}>
          {userDetails.mainDevice !== 'Computer' && (
            <SelectionButton
              type={'checkbox'}
              changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserDetails({
                  ...userDetails,
                  additionalDevices: e.target.checked
                    ? [...userDetails.additionalDevices, 'Computer']
                    : userDetails.additionalDevices.filter(
                        (device) => device !== 'Computer'
                      ),
                })
              }
              label={'Computer'}
              value={userDetails.additionalDevices.includes('Computer')}
            />
          )}
          {userDetails.mainDevice !== 'Mobile' && (
            <SelectionButton
              type={'checkbox'}
              changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserDetails({
                  ...userDetails,
                  additionalDevices: e.target.checked
                    ? [...userDetails.additionalDevices, 'Mobile']
                    : userDetails.additionalDevices.filter(
                        (device) => device !== 'Mobile'
                      ),
                })
              }
              label={'Mobile'}
              value={userDetails.additionalDevices.includes('Mobile')}
            />
          )}
          {userDetails.mainDevice !== 'Tablet' && (
            <SelectionButton
              type={'checkbox'}
              changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserDetails({
                  ...userDetails,
                  additionalDevices: e.target.checked
                    ? [...userDetails.additionalDevices, 'Tablet']
                    : userDetails.additionalDevices.filter(
                        (device) => device !== 'Tablet'
                      ),
                })
              }
              label={'Tablet'}
              value={userDetails.additionalDevices.includes('Tablet')}
            />
          )}
        </div>
        <div className={style.textQuestions}>
          Would you be interested to use mobile/tablet for study (if the study
          program provides support for such devices) where computers would be
          impractical (busses etc.)?
        </div>
        <div>1-5 where 5 is the highest</div>

        <RangeSlider
          min={1}
          max={5}
          value={userDetails.interest!}
          changed={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserDetails({
              ...userDetails,
              interest: parseInt(e.target.value),
            })
          }}
        />
      </div>
      <div>
        <span title=""></span>
      </div>
      <Button onClick={() => updateMutation()} text="Send in" />
    </div>
  )
}
