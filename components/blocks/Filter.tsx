import { useRef, useState } from 'react'
import FilterSection from 'components/elements/FilterSection'
import style from 'styles/components/_filter.module.scss'
import FilterIcon from 'lib/assets/icons/filterIcon.svg'
import { filterType } from 'lib/types/componentTypes'
import FilterItem from 'components/elements/FilterItem'
import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import { ActivitiesRouterInput } from 'lib/server/trpc/api/router/activities'

export interface FilterProps {
  filter: ActivitiesRouterInput['getAllActivities']
  setFilter: React.Dispatch<
    React.SetStateAction<ActivitiesRouterInput['getAllActivities']>
  >
  options: Partial<filterType>
}

export const Filter = ({ filter, setFilter, options }: FilterProps) => {
  const ref = useRef(null)
  const { isVisible, setIsVisible } = useOutsideClick(false, ref)

  return (
    <div className={style.filter} ref={ref}>
      <button className={style.button} onClick={() => setIsVisible(!isVisible)}>
        <FilterIcon />
        <span>Filter</span>
      </button>
      <ul
        className={style.list}
        style={isVisible ? { display: 'flex' } : { display: 'none', height: 0 }}
      >
        {options.activitytype && (
          <li>
            <FilterSection canSelect={false} title={'Activity types'}>
              <ul>
                {options.activitytype.map((atype, i) => (
                  <li key={i}>
                    <FilterItem
                      title={atype}
                      checked={filter.type.indexOf(atype) !== -1}
                      check={(isChecked: boolean) =>
                        isChecked
                          ? setFilter({
                              ...filter,
                              type: filter.type.filter(
                                (filterAType) => filterAType !== atype
                              ),
                            })
                          : setFilter({
                              ...filter,
                              type: [atype, ...filter.type],
                            })
                      }
                    />
                  </li>
                ))}
              </ul>
            </FilterSection>
          </li>
        )}
        {options.course &&
          options.course.length !== 0 &&
          options.course.map((course, i) => (
            <li key={i}>
              <FilterSection
                canSelect={true}
                title={course.name}
                checked={filter.courses.some((c) => c.name === course.name)}
                check={(isChecked: boolean) =>
                  isChecked
                    ? setFilter({
                        ...filter,
                        courses: filter.courses.filter(
                          (c) => c.name !== course.name
                        ),
                      })
                    : setFilter({
                        ...filter,
                        courses: [
                          { name: course.name, chapters: [] },
                          ...filter.courses,
                        ],
                      })
                }
              >
                <ul>
                  {course.chapters.map((chapter, j) => (
                    <li key={j}>
                      <FilterItem
                        title={chapter}
                        checked={filter.courses.some(
                          (c) =>
                            c.name === course.name &&
                            c.chapters.indexOf(chapter) !== -1
                        )}
                        check={(isChecked: boolean) =>
                          isChecked
                            ? setFilter({
                                ...filter,
                                courses: filter.courses.map((c) =>
                                  c.name == course.name
                                    ? {
                                        name: c.name,
                                        chapters: c.chapters.filter(
                                          (c) => c !== chapter
                                        ),
                                      }
                                    : c
                                ),
                              })
                            : setFilter({
                                ...filter,
                                courses: filter.courses.map((c) =>
                                  c.name == course.name
                                    ? {
                                        ...c,
                                        chapters: [chapter, ...c.chapters],
                                      }
                                    : c
                                ),
                              })
                        }
                      />
                    </li>
                  ))}
                </ul>
              </FilterSection>
            </li>
          ))}
      </ul>
    </div>
  )
}
export default Filter
