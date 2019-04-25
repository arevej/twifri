import React from 'react';
import { css } from 'emotion';

import { colors } from '../variables';

function Profile({ handle, avatarURL }) {
    return (
        <div key={handle} className={styles.profile}>
            <a href="#">
                <img className={styles.profile_avatar} src={avatarURL} />
            </a>
            <a className={styles.profile_handle} href="#">@{handle}</a>
        </div>
    )
}

const styles = {
    profile: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    profile_avatar: css`
        border-radius: 100%;
        width: 120px;
    `,

    profile_handle: css`
        font-size: 22px;
        color: ${colors.red};
        transition: all 0.3s;
        font-weight: 700;
  
        &:hover {
          color: ${colors.darkRed}
        }
    `,
}

export default Profile;