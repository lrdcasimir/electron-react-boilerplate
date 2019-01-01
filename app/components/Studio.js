import React from 'react';
import Blockly from '@code-dot-org/blockly';

type Props = {
	inject : (workspace: Blockly.BlockSpace) => void
}

class Studio extends React.Component<Props> {

	constructor(props) {
		super(props);
		this.editorDiv = React.createRef();
		this.toolbox = React.createRef();
	}
	componentDidMount = () => {
		this.props.inject(Blockly.inject(this.editorDiv.current,
			{
				toolbox: this.toolbox.current
			},
		))
	}

	render = () => {
		return (
			<div className="editorWrapper" >
				<xml ref={this.toolbox}>
					<block type="controls_if" />
				</xml>
			
				<div ref={this.editorDiv} />
			</div>
		)
	}
}
export default Studio;