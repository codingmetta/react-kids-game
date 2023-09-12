import React from 'react';
import { SvgIcon } from '@mui/material';



export default function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "black"
    }


    let diceFaces = null;
    switch (props.value) {
        case 1:
            diceFaces = (
                <SvgIcon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: 50, width: 50 }}
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="#fff"
                            stroke="#ccc"
                            strokeWidth="8"
                            d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zM256 206a50 50 0 010 100 50 50 0 010-100z"
                        ></path>
                    </svg>
                </SvgIcon>);
            break;
        case 2:
            diceFaces = (<SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 50, width: 50 }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="8"
                        d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zm316.97 36.03A50 50 0 01440 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zm-268 268A50 50 0 01172 390a50 50 0 01-100 0 50 50 0 0151.47-49.97z"
                    ></path>
                </svg>
            </SvgIcon>);
            break;

        case 3:
            diceFaces = (<SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 50, width: 50 }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="8"
                        d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zm316.97 36.03A50 50 0 01440 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zM256 206a50 50 0 010 100 50 50 0 010-100zM123.47 340.03A50 50 0 01172 390a50 50 0 01-100 0 50 50 0 0151.47-49.97z"
                    ></path>
                </svg>
            </SvgIcon>);
            break;

        case 4:
            diceFaces = (<SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 50, width: 50 }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="8"
                        d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zm48.97 36.03A50 50 0 01172 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zm-268 268A50 50 0 01172 390a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 390a50 50 0 01-100 0 50 50 0 0151.47-49.97z"
                    ></path>
                </svg>
            </SvgIcon>);
            break;

        case 5:
            diceFaces = (<SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 50, width: 50 }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="8"
                        d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zm48.97 36.03A50 50 0 01172 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zM256 206a50 50 0 010 100 50 50 0 010-100zM123.47 340.03A50 50 0 01172 390a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 390a50 50 0 01-100 0 50 50 0 0151.47-49.97z"
                    ></path>
                </svg>
            </SvgIcon>);
            break;

        case 6:
            diceFaces = (<SvgIcon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: 50, width: 50 }}
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="8"
                        d="M74.5 36A38.5 38.5 0 0036 74.5v363A38.5 38.5 0 0074.5 476h363a38.5 38.5 0 0038.5-38.5v-363A38.5 38.5 0 00437.5 36h-363zm48.97 36.03A50 50 0 01172 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 122a50 50 0 01-100 0 50 50 0 0151.47-49.97zM122 206a50 50 0 010 100 50 50 0 010-100zm268 0a50 50 0 010 100 50 50 0 010-100zM123.47 340.03A50 50 0 01172 390a50 50 0 01-100 0 50 50 0 0151.47-49.97zm268 0A50 50 0 01440 390a50 50 0 01-100 0 50 50 0 0151.47-49.97z"
                    ></path>
                </svg>
            </SvgIcon>);
            break;

        default:
            break;

    }


    return (
        <div
            className="dice-face"
            style={styles}
            onClick={props.holdDice}>

            {diceFaces}

        </div>
    )
}