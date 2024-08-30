import { Avatar, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import images from "../../assets/images";
import Scrollbars from "react-custom-scrollbars";
import React from "react";
import { useSidebar } from "../../shared/context/SidebarContext";

/* eslint-disable no-script-url */
const Chat: React.FC = () => {
    const [text, setText] = React.useState('');
    const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

    const { isChatbarOpen, closeChatbar } = useSidebar();

    const handleChange = (event: any) => {
        setText(event.target.value);
    };

    return (
        <div className={`chat-wrapper ${isChatbarOpen ? 'open' : ''}`}>
            <div className="chat-header">
                <Typography variant="h5" color="text.primary">
                    Chat
                </Typography>
                <IconButton size="medium" color="inherit" onClick={closeChatbar}>
                    <Avatar variant="square" src={images.CloseGrey} alt="Close" />
                </IconButton>
            </div>
            <div className="chat-body">
                <Scrollbars autoHide className="scroller-wrap">
                    <ul>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>


                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="receiver">
                            <div className="message">
                                <Typography variant="body2" color="text.primary">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum
                                </Typography>
                            </div>
                        </li>
                        <li className="sender">
                            <div className="message">
                                <Typography variant="body2" color="white">
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </div>
                        </li>
                    </ul>
                </Scrollbars>
            </div>
            <div className="chat-footer">
                <FormControl fullWidth>
                    <OutlinedInput
                        placeholder="Type Here...."
                        value={text}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position="start" sx={{ marginRight: '-20px' }}>
                                <IconButton
                                    color="inherit"
                                    edge="start"
                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                >
                                    <Avatar src={images.EmojiGrey} variant="square" alt="Emoji" />
                                </IconButton>
                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                >
                                    <Avatar src={images.SendGrey} variant="square" alt="Emoji" />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        </div>
    );
};

export default Chat;
