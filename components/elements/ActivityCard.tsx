import Link from 'next/link'
import style from 'styles/components/_activityCard.module.scss'
import ExerciseIcon from 'lib/assets/icons/exercise.svg'
import ChallengeIcon from 'lib/assets/icons/challenge.svg'
import React from 'react'
import { activityType } from '@prisma/client'

export interface ActivityCardProps {
  name?: string
  type?: activityType
  id: string
}

export const ActivityCard = ({ name, type, id }: ActivityCardProps) => {
  return (
    <li className={style.activityCard}>
      <Link href={`/activity/${id}`}>
        {type === 'Challenge' ? (
          <svg
            viewBox="0 0 57 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.2143 29.3545H46.1429V17.6127C46.1429 14.3543 43.7 11.7418 40.7143 11.7418H29.8571V7.33862C29.8571 5.3923 29.1422 3.52569 27.8697 2.14943C26.5971 0.773174 24.8711 0 23.0714 0C21.2717 0 19.5458 0.773174 18.2732 2.14943C17.0006 3.52569 16.2857 5.3923 16.2857 7.33862V11.7418H5.42857C3.98882 11.7418 2.60805 12.3603 1.58999 13.4613C0.571937 14.5624 0 16.0556 0 17.6127V28.7674H4.07143C8.14286 28.7674 11.4 32.2899 11.4 36.6931C11.4 41.0963 8.14286 44.6188 4.07143 44.6188H0V55.7735C0 57.3306 0.571937 58.8239 1.58999 59.9249C2.60805 61.0259 3.98882 61.6444 5.42857 61.6444H15.7429V57.2413C15.7429 52.8381 19 49.3156 23.0714 49.3156C27.1429 49.3156 30.4 52.8381 30.4 57.2413V61.6444H40.7143C42.154 61.6444 43.5348 61.0259 44.5529 59.9249C45.5709 58.8239 46.1429 57.3306 46.1429 55.7735V44.0317H50.2143C52.014 44.0317 53.7399 43.2586 55.0125 41.8823C56.2851 40.5061 57 38.6394 57 36.6931C57 34.7468 56.2851 32.8802 55.0125 31.5039C53.7399 30.1277 52.014 29.3545 50.2143 29.3545Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 46 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.875 22.6122H41.6875L25.875 5.54389V22.6122ZM5.75 0.888885H28.75L46 19.5089V56.7489C46 58.395 45.3942 59.9737 44.3159 61.1377C43.2375 62.3016 41.775 62.9556 40.25 62.9556H5.75C2.55875 62.9556 0 60.1626 0 56.7489V7.09555C0 3.65085 2.55875 0.888885 5.75 0.888885ZM6.095 42.7839L16.8475 54.3904L20.93 50.0147L14.2312 42.7839L20.93 35.5531L16.8475 31.1774L6.095 42.7839ZM38.18 42.7839L27.4275 31.1774L23.345 35.5531L30.0437 42.7839L23.345 50.0147L27.4275 54.3904L38.18 42.7839Z"
              fill="currentColor"
            />
          </svg>
        )}
        <div className={style.title}>{name}</div>
        <div
          className={`${style.type} ${
            style[`type-${type === 'Challenge' ? 'red' : 'purple'}`]
          }`}
        >
          {type}
        </div>
      </Link>
    </li>
  )
}
export default ActivityCard
