/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import React = require('react');

import { BreadCrumbItem } from "./BreadCrumbItem";

class BreadCrumb extends React.Component<INavigationProps, IBreadCrumbState> {

  public state : IBreadCrumbState;

  constructor(props : INavigationProps){
    super(props);
    //this.state = { editText: this.props.title };
  }

  /**
   * This is a completely optional performance enhancement that you can
   * implement on any React component. If you were to delete this method
   * the app would still work correctly (and still be very performant!), we
   * just use it as an example of how little code it takes to get an order
   * of magnitude performance improvement.
   */
  public shouldComponentUpdate(nextProps : INavigationProps, nextState : IBreadCrumbState) {
    /*return (
      nextProps.title !== this.props.title ||
      //nextProps.editing !== this.props.editing ||
      nextState.editText !== this.state.editText
    );*/
    return true;
  }

  /**
   * Safely manipulate the DOM after updating the state when invoking
   * `this.props.onEdit()` in the `handleEdit` method above.
   * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
   * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  //public componentDidUpdate(prevProps : INavigationItemProps) {
    /*if (!prevProps.editing && this.props.editing) {
      var node = React.findDOMNode<HTMLInputElement>(this.refs["editField"]);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }*/
  //}

  public handleBreadCrumbItemClick(clickedId) {
        console.log('In bread crumb click');
        console.log(clickedId)
        this.props.handleOnClick(clickedId);
    }

  public render() {
    
    //var boundOnClick = handleBreadCrumbItemClick;
    //var breadCrumbItem = <BreadCrumbItem id="testId" title="TestTitle"  />;
    if(this.props.currentSpecialty != null) // only render if any items
    {
        
        return (
              <div>
                BreadCrumb
                <ul>
              {this.props.menuItems.map(function(item){
                    var boundClick = this.handleBreadCrumbItemClick.bind(this);
                    return (                  
                    <BreadCrumbItem key={item.id} id={item.id} title={item.title} handleOnClick={boundClick} />   
                    )             
                }.bind(this))}
              </ul>
            </div>                            
        );
    }
  }
}

export { BreadCrumb };