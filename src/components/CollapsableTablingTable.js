import React from "react"
import TablingTimes from "../texts/Tabling_Time.json"
import Image from "./image"

var tablingTimesByTerm = createTimesByTerm(TablingTimes.Timeslots)

function createTimesByTerm(tablingTimes) {
  var tablingTimesByTerm = []
  tablingTimes.forEach(tablingTime => {
    var term = tablingTime.Term
    if (!tablingTimesByTerm[term]) {
      tablingTimesByTerm[term] = []
    }
    tablingTimesByTerm[term].push(
      <tr key={tablingTime.id}>
        <td>{tablingTime.Date}</td>
        <td>{tablingTime.Time}</td>
        <td>{tablingTime.Location}</td>
      </tr>
    )
  })
  return tablingTimesByTerm
}

function createTableCells(term) {
  return tablingTimesByTerm[term]
}

function Table(props) {
  var displayProperty
  if (props.isCollapsed) {
    displayProperty = "none"
  } else {
    displayProperty = "table"
  }
  var sty = { display: displayProperty }
  return (
    <table style={sty}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{createTableCells(props.term)}</tbody>
    </table>
  )
}

class CollapsableTablingTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      image:"DropDownButton",
    }
    this.changeCollapsedState = this.changeCollapsedState.bind(this)
  }

  changeCollapsedState() {
    this.setState(state => {
      if(state.collapsed)
       return { collapsed: false,image:"DropDownButton_Collapse"};
      else
        return {collapsed: true,image:"DropDownButton"};})
  }

  render() {
    return (
      <div>
        <div>{this.props.term + "Term"}</div>
        <div style={{ maxWidth: "50px" }}>
          <a onMouseDown={this.changeCollapsedState}>
            <Image name={this.state.image} />
          </a>
        </div>
        <Table isCollapsed={this.state.collapsed} term={this.props.term} />
      </div>
    )
  }
}

export default CollapsableTablingTable
