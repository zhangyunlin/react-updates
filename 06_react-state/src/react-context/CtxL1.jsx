import React from 'react'
import CtxL2 from './CtxL2';
import { MyContext } from './MyContext';

/**
 * context is a way to pass data through the component tree 
 * without having to pass props down manually at every level.
 * It is designed to share data that can be considered "global" for a tree of React components,
 *  such as the current authenticated user, theme, or preferred language.
 * 
 * @returns context level 1
 */

export default function CtxL1() {
  return (
    <div>
        <h1>Context Level 1</h1>
        <CtxL2 />   
    </div>
  )
}
