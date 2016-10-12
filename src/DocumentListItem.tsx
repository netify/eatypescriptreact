/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

class DocumentListItem extends React.Component<IDocumentListItemProps, any> {

  constructor(props : IDocumentListItemProps){
    super(props);
  }
  
  public handleOnClick(event) {
    var link : any = event.target;
  }

  public render() {
    return (
      <li>
        <a onClick={e => this.props.handleOnClick(e)}
        />
      </li>
    );
  }
}

export { DocumentListItem };
