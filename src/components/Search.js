import React, { useState } from 'react';
import { css } from 'emotion';

import Button from "./Button";

import { colors } from '../variables';

function Search({ value, onChange, onClickButton }) {
    const [isInputFocused, handleInputFocus] = useState(false);

    return (
        <div className={styles.search} >
            <div className={css`
            ${styles.search_input};
            border-color: ${isInputFocused ? colors.green : '#aaa'};
        `}>
                <span className={styles.search_input_tag}>@</span>
                <input
                    className={styles.search_input_input}
                    type="text"
                    placeholder="twitter handle"
                    value={value}
                    onChange={onChange}
                    onFocus={() => handleInputFocus(true)}
                    onBlur={!value ? () => handleInputFocus(false) : null}
                />
            </div>
            <div className={styles.container}>
                <Button text="Show" onClick={onClickButton} />
            </div>
        </div>
    )
}

const styles = {
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    search: css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 50px;
    `,
    search_input: css`
        border-bottom: 2px solid #aaa;
        padding: 5px 7px;
        margin-right: 35px;
        transition: all 0.3s;
    `,
    search_input_tag: css`
        color: ${colors.grey};
        font-size: 19px;
        font-weight: 700;
    `,
    search_input_input: css`
        color: ${colors.black};
        border: none;
        outline: none;
        font-size: 26px;
        font-family: Helvetica;
  
        ::placeholder {
          color: ${colors.grey};
        }
    `,
}

export default Search;