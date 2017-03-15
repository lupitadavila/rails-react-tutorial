class Records extends React.Component {
  render () {
    return (
      <ul className="Records">
      {
        this.props.data.map(function(record) {
          return <li key={record.title}> { record.title }, amount: {record.amount}, date: {record.date} </li>
        })
      }
      </ul>
    ); // end of return
  } // end of render
}

Records.propTypes = {
  records: React.PropTypes.object
};
