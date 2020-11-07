import React, { Component } from 'react';
import SortableTree, { addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree';

const firstNames = [
  'Abraham',
  'Adam',
  'Agnar',
  'Albert',
  'Albin',
  'Albrecht',
  'Alexander',
  'Alfred',
  'Alvar',
  'Ander',
  'Andrea',
  'Arthur',
  'Axel',
  'Bengt',
  'Bernhard',
  'Carl',
  'Daniel',
  'Einar',
  'Elmer',
  'Eric',
  'Erik',
  'Gerhard',
  'Gunnar',
  'Gustaf',
  'Harald',
  'Herbert',
  'Herman',
  'Johan',
  'John',
  'Karl',
  'Leif',
  'Leonard',
  'Martin',
  'Matt',
  'Mikael',
  'Nikla',
  'Norman',
  'Oliver',
  'Olof',
  'Olvir',
  'Otto',
  'Patrik',
  'Peter',
  'Petter',
  'Robert',
  'Rupert',
  'Sigurd',
  'Simon',
];

export default class UserTree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: 'Peter Olofsson' }, { title: 'Karl Johansson' }],
      addAsFirstChild: false,
    };
  }

  getRandomName = () => firstNames[Math.floor(Math.random() * firstNames.length)];

  addUser = (node, path) => {
    console.log("path: ");
    console.log(path);
    console.log("node: ");
    console.log(node);
    const getNodeKey = ({ treeIndex }) => treeIndex;
    const newTree =  addNodeUnderParent({
      treeData: this.state.treeData,
      parentKey: path[path.length - 1],
      expandParent: true,
      getNodeKey,
      newNode: {
        title: `${this.getRandomName()} ${
          node.title.split(' ')[0]
        }sson`,
      },
      addAsFirstChild: this.state.addAsFirstChild,
    });
    console.log("newTree");
    console.log(newTree);
    this.setState(state => ({
      treeData: addNodeUnderParent({
        treeData: this.state.treeData,
        parentKey: path[path.length - 1],
        expandParent: true,
        getNodeKey,
        newNode: {
          title: `${this.getRandomName()} ${
            node.title.split(' ')[0]
          }sson`,
        },
        addAsFirstChild: this.state.addAsFirstChild,
      }).treeData,
    }))
  }

  render() {
    const getNodeKey = ({ treeIndex }) => treeIndex;
    return (
      <div>
        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            generateNodeProps={({ node, path }) => ({
              buttons: [
                <button
                  onClick={() => {
                    this.addUser(node, path)
                  }}
                >
                  Add Child
                </button>,
                <button
                  onClick={() =>
                    this.setState(state => ({
                      treeData: removeNodeAtPath({
                        treeData: state.treeData,
                        path,
                        getNodeKey,
                      }),
                    }))
                  }
                >
                  Remove
                </button>,
              ],
            })}
          />
        </div>

      </div>
    );
  }
}