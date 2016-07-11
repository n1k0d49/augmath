import React from 'react';
import ReactDOM from 'react-dom';
import * as manip from '../../maths/manipulations.js';
import * as hist from './history';

export default class Tools extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {manip}
  // }

  render() {
    return <div>
      <ul id="tools" className="list-group text-center">
  			<h4>Selection</h4>
  			<div>
  				<li className="list-group-item">
  					<span>Manipulative:
  					<select className="traverse" id="manip" ref={(ref) => this.manipSelect = ref} value={this.props.manip} onChange={() => this.props.updateSelect(true)}>
  						<option value="term">Term</option>
  						<option value="factor">Factor</option>
  						<option value="power">Power</option>
  						<option value="base">Base</option>
  						<option value="numerator">Numerator</option>
  						<option value="denominator">Denominator</option>
  						<option value="available">Available (binom)</option>
  						<option value="chosen">Chosen (binom)</option>
  						<option value="sup">Superscript</option>
  						<option value="sub">Subscript</option>
  					</select>
  				</span>
  				</li>
  				<li className="list-group-item">
  					<span>Select multiple <input type="checkbox" name="multi_select" id="multi_select"/></span>
  					<br/>
  					<span>Select variable <input type="checkbox" name="multi_select" id="var_select"/></span>
  				</li>
  				<li className="list-group-item">
  					<span> Depth:
  						<input type="number" min="1" step="1" value={this.props.depth} className="traverse" id="depth" ref={(ref) => this.depthSelect = ref} onChange={ () => this.props.updateSelect()}/>
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
  					<label>Replace selection with: <input id="replace" size="20" placeholder="Type LaTeX here" onChange={()=> {} /*manip.replace(this.value)*/} /></label>
  					<span>Replace individually <input type="checkbox" name="multi_select" id="replace_ind"/></span>
  				</li>
  				<button type="button" className="list-group-item" id="remove">
  					Remove
  				</button>
  				<button type="button" className="list-group-item" id="unbracket">
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
  		</ul>
    </div>
  }
}
