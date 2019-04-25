import React from 'react';
import { css } from 'emotion';

import { colors } from '../variables';

function Closeness({ level }) {
    return (
        <span className={styles.closeness}>
            {(() => {
                // eslint-disable-next-line default-case
                switch (level) {
                    case 1:
                        return <span className={css`color: ${colors.redLight}; font-weight: 600;};`}>poorly</span>;
                    case 2:
                        return <span className={css`color: ${colors.yellowLight}; font-weight: 600;};`}>likely</span>;
                    case 3:
                        return <span className={css`color: ${colors.greenLight}; font-weight: 600;};`}>definitely</span>;
                }
            })()} friends</span>
    )
}

const styles = {
    closeness: css`
        font-size: 26px;
        margin-left: 30px;
    `,
}

export default Closeness;