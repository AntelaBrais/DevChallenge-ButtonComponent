import React from "react"
import styles from "./Button.module.css"
import * as MaterialIcon from "react-icons/md"
import classnames from "classnames"

function changeStyle(props) {
  let style = classnames(styles.baseStyle)

  switch (props.size) {
    case "sm":
      style = classnames(style, styles.small)
      break

    case "lg":
      style = classnames(style, styles.large)
      break

    default:
      style = classnames(style, styles.medium)
      break
  }

  switch (props.color) {
    case "primary":
      style = classnames(style, styles.primaryColor)
      break

    case "secondary":
      style = classnames(style, styles.secondaryColor)
      break

    case "danger":
      style = classnames(style, styles.dangerColor)
      break

    default:
      style = classnames(style, styles.default)
      break
  }

  if (props.disabled) {
    style = classnames(style, styles.disabled)
  }

  if (props.disabledShadow) {
    style = classnames(style, styles.disabledShadow)
  }

  switch (props.variant) {
    case "text":
      style = classnames(style, styles.text)
      break

    case "outline":
      style = classnames(style, styles.outline)
      break

    default:
      break
  }

  return style
}

function Button(props) {
  return (
    <button
      className={changeStyle(props)}
      onClick={() => console.log("Hello")}
      {...props}>
      {props.startIcon ? <i class='material-icons'>{props.startIcon}</i> : null}
      {props.title ? props.title : "Default"}
      {props.endIcon ? <i class='material-icons'>{props.endIcon}</i> : null}
    </button>
  )
}

export default Button
