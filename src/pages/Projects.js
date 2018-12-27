// import React, { Component } from 'react'
// import styled from 'styled-components'
// import TileHOC from './TileHOC'
// import CarlTile from './projects/CarlTile'
// import Carl from './projects/Carl'
// import HelloVR from './projects/HelloVR'
// import HelloVRTile from './projects/HelloVRTile'
// import { connect } from 'react-redux'
// import { loadProject, closeProject } from '../actions'
// import PropTypes from 'prop-types'



// const CarlHOC = TileHOC(CarlTile)
// const HelloHOC = TileHOC(HelloVRTile)
// const Placeholder = TileHOC()

// class Projects extends Component {

//   render () {
//     const {
//       toggle,
//       project,
//       _loadProject,
//       _closeProject
//     } = this.props

//     return (
//       <Main>
//         {
//           toggle &&
//           <ProjectOverlay
//             // onClick={() => _closeProject()}
//           >

//             { project === 'CARL' &&
//               <Carl close={() => _closeProject()} />
//             }

//             { project === 'HELLO_VR' &&
//               <HelloVR close={() => _closeProject()} />
//             }

//           </ProjectOverlay>
//         }

//         <ListContainer>
//           <CarlHOC
//             name={'pale blue dot'}
//             description={'a tribute to carl sagan'}
//             load={() => _loadProject('CARL')} />
//           <HelloHOC
//             name={'hello a-frame!'}
//             description={'an a-frame example'}
//             load={() => _loadProject('HELLO_VR')} />
//           <Placeholder />
//           <Placeholder />
//         </ListContainer>
//       </Main>
//     )
//   }
// }

// Projects.defaultProps = {
//   toggle: false,
//   project: 'placeholder'
// }

// Projects.propTypes = {
//   toggle: PropTypes.bool,
//   project: PropTypes.string,
//   _loadProject: PropTypes.func,
//   _closeProject: PropTypes.func
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     _loadProject: project => {
//       dispatch(loadProject(project))
//     },
//     _closeProject: () => dispatch(closeProject())
//   }
// }

// const mapStateToProps = (state) => {
//   const { project, toggle } = (state || {}).projectReducer

//   return {
//     ...(project) && { project },
//     toggle
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Projects)

// const Main = styled.nav`
//   position: relative;
//   height: 100%;
//   width: 100%;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `
// const ListContainer = styled.section`
//   position: relative;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `

// const ProjectOverlay = styled.section`
//   position: absolute;
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0,0,0,0);
//   animation: fadein 2s;

//   @keyframes fadein {
//     from { opacity: 0; }
//     to   { opacity: 1; }
//   }
// `