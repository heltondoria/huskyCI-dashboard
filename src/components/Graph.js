import { Paper } from '@material-ui/core'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import React from 'react'

const barChartDefaultOptions = {
  legend: {
    display: false
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0
        }
      }
    ]
  }
}

const pieChartDefaultOptions = {
  legend: {
    display: false
  }
}

const dounghnutChartDefaultOptions = {
  legend: {
    display: false
  }
}

const GraphType = {
  Pie: 'Pie',
  Doughnut: 'Doughnut',
  Bar: 'Bar'
}

const Graph = props => <Paper>{renderGraph(props)}</Paper>

const renderGraph = props => {
  switch (props.type) {
    case GraphType.Bar:
      return asBar({ ...props })
    case GraphType.Doughnut:
      return asDoughnut({ ...props })
    case GraphType.Pie:
      return asPie({ ...props })
    default:
      return asBar({ ...props })
  }
}

const asDoughnut = ({
  data,
  width,
  height,
  options = dounghnutChartDefaultOptions
}) => <Doughnut data={data} width={width} height={height} options={options} />
const asPie = ({ data, width, height, options = pieChartDefaultOptions }) => (
  <Pie data={data} width={width} height={height} options={options} />
)
const asBar = ({ data, width, height, options = barChartDefaultOptions }) => (
  <Bar data={data} width={width} height={height} options={options} />
)

Graph.defaultProps = {
  type: GraphType.Bar,
  boxMargin: 8,
  width: 400,
  height: 300
}

Graph.propTypes = {
  type: PropTypes.string,
  data: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

export { Graph, GraphType }