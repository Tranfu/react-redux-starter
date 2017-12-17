import React from 'react'

const renderField = ({
  input,
  label,
  type,
  min,
  disabled,
  meta: { touched, error, warning },
  children,
}) => (
  <div className={touched && error ? 'form-group has-error' : 'form-group'}>
    <label className="control-label">{label}</label>
    {
      (() => {
        switch (type) {
          case 'text':
            return <input className="form-control" {...input} placeholder={label} type={type} disabled={disabled} />
          case 'number':
            return <input className="form-control" {...input} placeholder={label} type={type} min={min} disabled={disabled} />
          case 'textarea':
            return <textarea className="form-control" rows="3" {...input} placeholder={label} disabled={disabled}></textarea>
          default:
            return (
              <select className="form-control" {...input} disabled={disabled}>
                {children}
              </select>
            )
        }
      })()
    }
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export default renderField
