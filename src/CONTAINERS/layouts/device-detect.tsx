import React from 'react';
import {
    isIE,
    isSafari,
    isMobileSafari,
    browserName,
} from 'react-device-detect';
import { Icon, InlineIcon } from '@iconify/react';
import behanceIcon from '@iconify-icons/simple-icons/behance';
import mozillafirefoxIcon from '@iconify-icons/simple-icons/mozillafirefox';
import googlechromeIcon from '@iconify-icons/simple-icons/googlechrome';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import { getLanguage } from '../../SERVICES/user-service';
const handleNavigateBrowser = (route: any) => {
    window.open(route, '_blank');
};
export default (props: any) => {
    const [open, setOpen] = React.useState(false);
    const language: any = React.useState('my');
    language.current = getLanguage();
    React.useEffect(() => {
        if (isSafari || isMobileSafari || isIE) {
            setOpen(true);
        }
    }, []);

    return (
        <React.Fragment>
            {open == true ? (
                <div style={{ position: 'fixed', zIndex: 9999, width: '100%' }}>
                    <Alert
                        severity='warning'
                        action={
                            <IconButton
                                aria-label='close'
                                color='inherit'
                                size='small'
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize='inherit' />
                            </IconButton>
                        }
                    >
                        {/* <AlertTitle>Warning</AlertTitle> */}
                        {console.log(language.current)}
                        {language.current == 'my' ? (
                            <span>
                                Pelayar semasa anda, "{browserName}" tidak
                                digalakkan. Untuk pengalaman penuh, anda
                                memerlukan salah satu daripada pelayar berikut:
                            </span>
                        ) : (
                            <span>
                                {' '}
                                Your current browser, "{browserName}" is not
                                recommended. For the full experience, you
                                require one of the following browsers:
                            </span>
                        )}
                        <div className='i-y-center i-x-center'>
                            <div
                                style={{ flexDirection: 'column' }}
                                className='i-y-center i-x-center'
                            >
                                <IconButton
                                    onClick={() =>
                                        handleNavigateBrowser(
                                            'https://www.mozilla.org/en-US/firefox/new/'
                                        )
                                    }
                                >
                                    <InlineIcon
                                        style={{
                                            fontSize: '40px',
                                        }}
                                        icon={mozillafirefoxIcon}
                                    />
                                </IconButton>
                                <Typography variant='body2'>Firefox</Typography>
                            </div>
                            <div
                                style={{ flexDirection: 'column' }}
                                className='i-y-center i-x-center'
                            >
                                <IconButton
                                    onClick={() =>
                                        handleNavigateBrowser(
                                            'https://www.google.com/chrome/'
                                        )
                                    }
                                >
                                    <InlineIcon
                                        style={{
                                            fontSize: '40px',
                                        }}
                                        icon={googlechromeIcon}
                                    />
                                </IconButton>
                                <Typography variant='body2'>Chrome</Typography>
                            </div>
                        </div>
                    </Alert>
                </div>
            ) : null}
        </React.Fragment>
    );
};
