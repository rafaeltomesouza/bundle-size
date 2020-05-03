import { connect } from "react-redux";
import { openChart, closeChart } from "../../actions/status";
import Home from "./components/Home";

const mapStateToProps = (state: any) => {
  return {
    chart: state.status
  };
};

const mapDispatchToProps = {
  openChart,
  closeChart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
