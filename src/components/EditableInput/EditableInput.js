import React, { useEffect, useState } from "react";
import cn from 'classnames'
import classes from './EditableInput.module.scss'

export const EditableInput = ({ toggle, title, editTitle, classCustom, letterLimit, isEmpty = false}) => {
  const [value, setValue] = useState("")
  const [status, setStatus] = useState(false)

  useEffect(() => {
    setValue(title)
  }, [title])

  //if you are need empty field you can used isEmpty=true

  const handleChange = e => {
    let val = e.target.value
    if (letterLimit || letterLimit === undefined) {

      if (letterLimit > 0) {
        //custom limited
        if (isEmpty) {
          setStatus(true)
          setValue(val)
        } else {
          if (val.trim().length >= 1 && val.trim().length <= letterLimit) {
            setStatus(true)
            setValue(val)
          } else if (val.trim().length === 0) {
            setValue(val)
            setStatus(false)
          }
        }
      } else {
        if (isEmpty) {
          setStatus(true)
          setValue(val)
        } else {
          //standard limited
          if (val.trim().length >= 1 && val.trim().length <= 30) {
            setStatus(true)
            setValue(val)
          } else if (val.trim().length === 0) {
            setValue(val)
            setStatus(false)
          }
        }
      }

    } else if (!letterLimit) {
      if (isEmpty) {
        setStatus(true)
        setValue(val)
      } else {
        //don't limited
        if (val.trim().length >= 1) {
          setStatus(true)
          setValue(val)
        } else if (val.trim().length === 0) {
          setValue(val)
          setStatus(false)
        }
      }
    }
  }

  const editName = (e) => {
    if (status) {
      toggle(e);
      editTitle(value)
    } else {
      toggle(e, true)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && status) {
      toggle()
      editTitle(value)

    } else if (e.key === "Enter") {
      toggle(true)
    }
  }


  return <input
    className={cn(classes.title, classCustom)}
    type="text" value={value}
    autoFocus={true}
    onChange={handleChange}

    onBlur={editName}
    onKeyPress={handleKeyDown}
  />
}
