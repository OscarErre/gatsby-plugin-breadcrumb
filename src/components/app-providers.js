/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react'
import { BreadcrumbProvider } from './BreadcrumbContext'
import { OptionsProvider } from './options-context'

export const AppProviders = ({ element, pluginOptions }) => {
  const {
    defaultCrumb,
    useClassNames,
    useAutoGen,
    usePathPrefix,
  } = pluginOptions

  return (
    <OptionsProvider
      useAutoGen={useAutoGen || false}
      useClassNames={useClassNames || false}
      usePathPrefix={usePathPrefix || null}
    >
      <BreadcrumbProvider setHome={defaultCrumb || null}>
        {element}
      </BreadcrumbProvider>
    </OptionsProvider>
  )
}