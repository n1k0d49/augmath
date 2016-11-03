import React from 'react';
import ReactDOM from 'react-dom';
import * as manip from '../../maths/manipulations.js';
import * as hist from './history';
// import Tangle from './Tangle'

export default class Tools extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {manip}
  // }
  replaceSelection() {
    manip.replace(this.replaceSelectInput.value, this.props.state.replace_ind)
  }
  componentDidMount() {
  //   let initDepth = this.props.depth;
  //   let manip = this.props.manip
  //   let updateSelect = this.props.updateSelect;
  //   let tangle = new Tangle (ReactDOM.findDOMNode(this.refs.depth_parent), {
  //     initialize: function () { this.depth = initDepth; },
  //     update:     function () { updateSelect(false, manip, this.depth) }
  //   });
  $("#depth").numbers({
    min: 0,
    step: 1,
    integer: true,
    growth: 10,
  });
  }
  render() {
    return <div>
      <ul id="tools" className="list-group text-center">
  			<h4>Selection</h4>
  			<div>
  				<li className="list-group-item">
  					<span>Manipulative:
  					<select className="traverse" id="manip" value={this.props.manip} onChange={(e) => this.props.updateSelect(true, e.target.value)}>
  						<option value="term">Term</option>
  						<option value="factor">Factor</option>
  						<option value="power">Power</option>
  						<option value="base">Base</option>
  						<option value="numerator">Numerator</option>
  						<option value="denominator">Denominator</option>
  						<option value="available">Available (binom)</option>
  						<option value="chosen">Chosen (binom)</option>
  						<option value="sups">Superscript</option>
  						<option value="subs">Subscript</option>
  					</select>
  				</span>
  				</li>
  				<li className="list-group-item">
  					<span>Select multiple <input type="checkbox" name="multi_select" id="multi_select" onChange={()=>this.props.updateState({multi_select: !this.props.state.multi_select})}/></span>
  					<br/>
  					<span>Select variable <input type="checkbox" name="var_select" id="var_select" onChange={()=>this.props.updateState({var_select: !this.props.state.var_select})}/></span>
  				</li>
  				<li className="list-group-item" ref="depth_parent">
  					<span> Depth: &nbsp;
  						{/*<input type="number" min="1" step="1" value={this.props.depth} className="traverse" id="depth" onChange={ (e) => this.props.updateSelect(false, this.props.manip, parseInt(e.target.value))}/>*/}
              {/*<span className="TKAdjustableNumber" data-var="depth"></span>*/}
              <span className="adjustable_number TKAdjustableNumber" id="depth" onMouseDown={ (e) => {
                  let el = e.target;
                  let props = this.props;
                  $(document).mouseup(()=>{
                    // console.log("hi",parseInt(el.innerHTML));
                    props.updateSelect(false, props.manip, parseInt(el.innerHTML));
                    $(document).off("mouseup");
                  });
                }}>{this.props.depth}</span>
  					</span>
  				</li>
  			</div>
  			<h4>Manipulations</h4>
  			<div>
  				<li className="list-group-item">
  					<button type="button" className="btn btn-default" id="undo" onClick={hist.undo}>
  						Undo
  					</button>
  					<button type="button" className="btn btn-default" id="redo" onClick={hist.redo}>
  						Redo
  					</button>
  				</li>
  				<li className="list-group-item">
  					<button type="button" className="btn btn-default" id="flip_equation" onClick={manip.flip_equation}>
  						Flip equation
  					</button>
  					<button type="button" className="btn btn-default" id="change_side" onClick={manip.change_sign}>
  						Change side
  					</button>
  				</li>
  				<li className="list-group-item">
  					<button type="button" className="btn btn-default" id="move_up" onClick={manip.move_up}>
  							<span className="glyphicon glyphicon-arrow-up"></span>
  					</button>
  					<div className="row">
  						<button type="button" className="btn btn-default" id="move_left" onClick={manip.move_left}>
  							<span className="glyphicon glyphicon-arrow-left"></span>
  						</button>
  						<span>Move selection</span>
  						<button type="button" className="btn btn-default" id="move_right" onClick={manip.move_right}>
  							<span className="glyphicon glyphicon-arrow-right"></span>
  						</button>
  					</div>
  					<button type="button" className="btn btn-default" id="move_down" onClick={manip.move_down}>
  							<span className="glyphicon glyphicon-arrow-down"></span>
  					</button>
  				</li>
  				<li className="list-group-item">
  					<button type="button" className="btn btn-default" id="distribute-in" onClick={manip.distribute_in}>
  						Distribute in
  					</button>
  					<button type="button" className="btn btn-default" id="collect-out" onClick={manip.collect_out}>
  						Collect out
  					</button>
  				</li>
  				<button type="button" className="list-group-item" id="eval" onClick={manip.evaluate}>
  					Evaluate/Simplify
  				</button>
  				<button type="button" className="list-group-item" id="operate" onClick={manip.operate}>
  					Operate
  				</button>
  				<li className="list-group-item">
  					<label>Append to both sides: <input id="add_both_sides" size="20" placeholder="Type LaTeX here" /></label>
  				</li>
  				<li className="list-group-item">
  					<label>Replace selection with: <input id="replace" size="20" ref={(ref) => this.replaceSelectInput = ref} placeholder="Type LaTeX here" onKeyUp={(e)=> {if (e.keyCode == 13) this.replaceSelection()}} /></label>
  					<span>Replace individually <input type="checkbox" name="replace_ind" id="replace_ind" onChange={()=>this.props.updateState({replace_ind: !this.props.state.var_select})}/></span>
  				</li>
  				<button type="button" className="list-group-item" id="remove" onClick={manip.remove}>
  					Remove
  				</button>
  				<button type="button" className="list-group-item" id="unbracket" onClick={manip.unbracket}>
  					Unbracket
  				</button>
  			</div>
  			<h4>Recording</h4>
  			<div>
  				<li className="list-group-item">
  					<span>Recording <input type="checkbox" name="recording" id="recording"/></span>
  				</li>
  				<button type="button" className="list-group-item" id="make_json">
  					Save JSON
  				</button>
  				<button type="button" className="list-group-item" id="play">
  					Play
  				</button>
  				<button type="button" className="list-group-item" id="prev_step">
  					Previous Step
  				</button>
  				<button type="button" className="list-group-item" id="next_step">
  					Next Step
  				</button>
  			</div>
        <h4>Settings</h4>
  			<div>
  				<button type="button" className="list-group-item" id="make_json">
  					<label htmlFor="zoom-slider">Zoom</label> <input name="zoom-slider" id="zoom-slider" type="range" min="1" max="100" step="3" defaultValue="14" onChange={this.props.updateZoom}/>
  				</button>
  			</div>
  		</ul>
    </div>
  }
}
