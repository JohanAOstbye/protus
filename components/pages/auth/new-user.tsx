import { Button } from 'components/elements/Button'
import { Input } from 'components/elements/Input'
import { trpc } from 'lib/server/trpc/provider'
import { useState } from 'react'
import style from 'styles/pages/_newUserPage.module.scss'
import { SelectionButton } from 'components/elements/SelectionButton'
import RangeSlider from 'components/elements/RangeSlider'
import React from 'react'

export const NewUserPage = () => {
  const [code, setCode] = useState('')
  const [ntnuStudent, setNtnuStudent] = useState('')
  const [studyProgram, setStudyProgram] = useState('')
  const [yearsExperience, setYearsExperience] = useState(0)
  const [crossplatformInterest, setcrossplatformInterest] = useState(0)
  const [studyDevice, setStudyDevice] = React.useState('')
  const [isComputerCheckbox, setComputerCheckbox] = React.useState(false)
  const [isTabletCheckbox, setTabletCheckbox] = React.useState(false)
  const [isMobileCheckbox, setMobileCheckbox] = React.useState(false)

  const handleNtnuStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNtnuStudent(e.target.value)
  }
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudyDevice(e.target.value)
  }

  //TODO send update to TRPC
  const updateInfo = () => {
    console.log('code:', code)
    console.log('ntnustudent:', ntnuStudent)
    console.log('studyprogram:', studyProgram)
    console.log('years experience:', yearsExperience)
    console.log('main study device:', studyDevice)
    console.log(
      'additional study devices:\ncomputer:',
      isComputerCheckbox,
      '\nmobile:',
      isMobileCheckbox,
      '\ntablet:',
      isTabletCheckbox
    )
    console.log('interested in crossplatform:', crossplatformInterest)
  }

  return (
    <div className={style.newUserPage}>
      <h1>Survey (1min)</h1>
      <div className={style.textQuestions}>Code recieved:</div>
      <Input
        value={code}
        type="text"
        placeholder="Code:"
        onChange={(e) => setCode(e.target.value)}
      />

      <div className={style.questionnaire}>
        <div className={style.textQuestions}>Do you study at NTNU?</div>
        <div className={style.radioGroups}>
          <SelectionButton
            type={'radio'}
            // changed={handleRadioChange}
            changed={handleNtnuStudentChange}
            isSelected={ntnuStudent === 'Yes'}
            group={'study'}
            label={'Yes'}
            value={'Yes'}
          />
          <SelectionButton
            type={'radio'}
            changed={handleNtnuStudentChange}
            isSelected={ntnuStudent === 'No'}
            group={'study'}
            label={'No'}
            value={'No'}
          />
        </div>

        <div className={style.textQuestions}>What is your field of study?</div>
        <Input
          placeholder="Ex: mathematics:"
          value={studyProgram}
          onChange={(e) => {
            setStudyProgram(e.target.value)
          }}
        />
        <div className={style.textQuestions}>
          How many years experience do you have with coding?
        </div>
        <RangeSlider
          min={0}
          max={10}
          changed={(e: React.ChangeEvent<HTMLInputElement>) => {
            setYearsExperience(parseInt(e.target.value))
          }}
          value={yearsExperience}
        />
        <div className={style.textQuestions}>
          What is your main device for study?
        </div>
        <div className={style.selectionGroups}>
          <SelectionButton
            type={'radio'}
            changed={handleRadioChange}
            isSelected={studyDevice === 'Computer'}
            group={'studyDevice'}
            label={'Computer'}
            value={'Computer'}
          />
          <SelectionButton
            type={'radio'}
            changed={handleRadioChange}
            isSelected={studyDevice === 'Mobile'}
            group={'studyDevice'}
            label={'Mobile'}
            value={'Mobile'}
          />
          <SelectionButton
            type={'radio'}
            changed={handleRadioChange}
            isSelected={studyDevice === 'Tablet'}
            group={'studyDevice'}
            label={'Tablet'}
            value={'Tablet'}
          />
        </div>
        <div className={style.textQuestions}>
          Do you use other devices to study?
        </div>
        <div className={style.selectionGroups}>
          <SelectionButton
            type={'checkbox'}
            changed={() => setComputerCheckbox(!isComputerCheckbox)}
            label={'Computer'}
            value={isComputerCheckbox}
          />
          <SelectionButton
            type={'checkbox'}
            changed={() => setMobileCheckbox(!isMobileCheckbox)}
            label={'Mobile'}
            value={isMobileCheckbox}
          />
          <SelectionButton
            type={'checkbox'}
            changed={() => setTabletCheckbox(!isTabletCheckbox)}
            label={'Tablet'}
            value={isTabletCheckbox}
          />
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
          changed={(e: React.ChangeEvent<HTMLInputElement>) => {
            setcrossplatformInterest(parseInt(e.target.value))
          }}
          value={crossplatformInterest}
        />
      </div>
      <Button onClick={updateInfo} text="Send in" />
    </div>
  )
}
