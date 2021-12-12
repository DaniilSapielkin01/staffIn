import React, { useEffect, useState } from 'react';
import { UncontrolledPopover } from 'reactstrap';

import { stringToColor } from '../../../../helpers/utils';
import cn from 'classnames';

import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'

import classes from './getCellPopover.module.scss';
import Avatar from '../../Avatar';

const GetCellPopover = ({
 setDropdownOpen,
 dropdownOpen,
 state,
 currentValue='',
 width,
 height,
 linkRef,
 noResult = 'No result',
 handleChange,
 icon,
 handleCloseDropDown,
 defaultMember,
 ...rest
}) => {
  const [localState, setLocalState] = useState([])

  useEffect(() => {
    setLocalState(state)
  },[])

  const handleSearch =(e) => {
    const filterSelect = state.filter(item =>
      `${item.label}`.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )
    setLocalState(filterSelect)
  }

  return (
      <UncontrolledPopover
        popperClassName={classes.popoverSelect}
        trigger="legacy"
        isOpen={dropdownOpen}
        target={linkRef}
        toggle={()=> setDropdownOpen(!dropdownOpen)}
        placement="bottom"
      >
        <div style={{width: `${width + 40}px`}} className={classes.popoverItem}>

          <div className={cn("d-flex align-items-center", classes.search)}>
           <div className={classes.searchItem}>
             <label className={cn("d-flex align-items-center", classes.searchLabel)} htmlFor="search-input">
               <SearchIcon height={16} width={16} className={classes.searchIcon}/>
               <input
                 type="text"
                 placeholder='Search...'
                 autoComplete="off"
                 onChange={handleSearch}
               />
             </label>
           </div>
          </div>

          <div className={classes.lineBrake}/>
          {localState.length
            ? localState.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={cn(classes.popupMenu, {[classes.defaultIcon]: true })}
                  onClick={() => handleChange(item)}>

                  <div className={classes.popupItem}
                       onClick={()=>setDropdownOpen(!dropdownOpen)}>
                    {item.id ? <Avatar width={28} height={28} id={item.id} className="mr-1" name={item.label} icon={item.icon}/>
                      : <div className="d-flex mr-1">{defaultMember.icon}</div>
                    }
                    <div className={classes.currentName}>{item.label}</div>
                  </div>
                </div>)
            })
            : <div onMouseDown={() => setDropdownOpen(!dropdownOpen)} className='text-secondary mx-3'>
              {noResult}</div>
          }

        </div>
      </UncontrolledPopover>
  )
}

export default GetCellPopover;
