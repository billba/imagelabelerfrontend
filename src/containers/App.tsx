import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import specific action creators and add them to mapDispatchToProps
import { updateAppName, loadImagesAndLabels } from '../actions';
import TaskList from '../components/taskList';

interface Props {
  updateAppName: Function,
  loadImagesAndLabels: Function
};

class App extends React.Component<any, any> {
  constructor(p: Props){
    super(p)
  };

  componentWillMount(){
    console.log(`Mounting, value for name in apps reducer is: ${this.props.apps.name}`)
    console.log('About to call action creator')
    this.props.updateAppName('MSApp')
    this.props.loadImagesAndLabels()
  }

  render() {
    console.log(`Rendering, value for name in apps reducer is: ${this.props.apps.name}`)
    return (
      <div className="App">
        <div className="App-header">
          <h2>React TypeScript Starter Project</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.tsx</code> and save to reload. Username is {this.props.apps.userid}. Image list : {this.props.apps.images}. Labels: {this.props.apps.labels}.  
        </p>
        <div>
          <TaskList />
        </div>
      </div>
    );    
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    updateAppName,
    loadImagesAndLabels,
  }, dispatch);
};

const mapStateToProps = (state: any) => {
  return {
    apps: state.apps
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
