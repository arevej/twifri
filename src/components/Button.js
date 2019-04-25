import React from 'react';
import { css } from 'emotion';

import { colors } from '../variables';

function Button({ text, onClick }) {
    return (
        <div
            className={styles.search_button}
            onClick={onClick}
        >
            {text}
        </div>
    )
}

const styles = {
    search_button: css`
        border: 2px solid ${colors.green};
        color: ${colors.black};
        padding: 9px 40px;
        border-radius: 5px;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
        background: ${colors.green};
        color: ${colors.white};
        }
    `,
}

export default Button;
