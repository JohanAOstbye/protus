import Filter from 'components/blocks/Filter'
import { filterType } from 'lib/types/componentTypes'
import React, { useState } from 'react'

type filterWrapperProps = {
  options: React.ComponentProps<typeof Filter>['options']
}

const FilterWrapper = ({ options }: filterWrapperProps) => {
  const [filter, setFilter] = useState<filterType>({
    activitytype: [],
    course: [],
  })
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} options={options} />
    </div>
  )
}

export default FilterWrapper
