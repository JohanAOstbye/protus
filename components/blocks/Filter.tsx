import { useRef } from 'react'
import FilterSection from 'components/elements/FilterSection'
import style from 'styles/components/_filter.module.scss'
import FilterIcon from 'lib/assets/icons/filterIcon.svg'
import { filterType } from 'lib/types/componentTypes'
import FilterItem from 'components/elements/FilterItem'
import useOutsideClick from 'components/hooks/useOutsideClick.hook'

export interface FilterProps {
  filter: filterType
  setFilter: React.Dispatch<React.SetStateAction<filterType>>
  options: Partial<filterType>
}

export const Filter = ({ filter, setFilter, options }: FilterProps) => {
  const ref = useRef(null)
  const { isVisible, setIsVisible } = useOutsideClick(false, ref)

  return (
    <div className={style.filter} ref={ref}>
      <button className={style.button} onClick={() => setIsVisible(!isVisible)}>
        {/* <FilterIcon /> */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00018 6H17.0002L11.9902 12.3L7.00018 6ZM4.25018 5.61C6.27018 8.2 10.0002 13 10.0002 13V19C10.0002 19.55 10.4502 20 11.0002 20H13.0002C13.5502 20 14.0002 19.55 14.0002 19V13C14.0002 13 17.7202 8.2 19.7402 5.61C19.8548 5.46237 19.9256 5.28553 19.9447 5.09961C19.9637 4.91368 19.9301 4.72615 19.8478 4.55837C19.7655 4.39059 19.6377 4.24929 19.479 4.15058C19.3203 4.05186 19.1371 3.99969 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z"
            fill="currentColor"
          />
        </svg>

        <span>Filter</span>
      </button>
      <ul
        className={style.list}
        style={isVisible ? { display: 'flex' } : { display: 'none', height: 0 }}
      >
        {options.type && (
          <li>
            <FilterSection canSelect={false} title={'Activity types'}>
              <ul>
                {options.type.map((type, i) => (
                  <li key={i}>
                    <FilterItem
                      title={type}
                      checked={filter.type.indexOf(type) !== -1}
                      check={(isChecked: boolean) =>
                        isChecked
                          ? setFilter({
                              ...filter,
                              type: filter.type.filter(
                                (filterType) => filterType !== type
                              ),
                            })
                          : setFilter({
                              ...filter,
                              type: [type, ...filter.type],
                            })
                      }
                    />
                  </li>
                ))}
              </ul>
            </FilterSection>
          </li>
        )}
        {options.courses &&
          options.courses.length !== 0 &&
          options.courses.map((course, i) => (
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
