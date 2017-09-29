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
      type ?
      <input className="form-control" {...input} placeholder={label} type={type} min={min} disabled={disabled} />
        :
      <select className="form-control" {...input} disabled={disabled}>
        {children}
      </select>
    }
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

export default renderField
