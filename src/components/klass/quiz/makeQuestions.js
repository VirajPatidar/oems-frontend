import React from 'react';
import { Box, Button, makeStyles, Paper, Snackbar, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userData, quizDrawerId, currentQuizId } from '../../../atoms';
import axiosInstance from '../../../axios';
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
    snackbar: {
        paddingBottom: theme.spacing(3),
    },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

const MakeQuestions = ({ qnum }) => {

    const quizId = useRecoilValue(currentQuizId);
    const setDrawerId = useSetRecoilState(quizDrawerId)


    //Snackbar
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);

    let questions = [];

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <Box mt={4}>
            <Typography variant="h5" style={{ paddingBottom: 0 }}>
                Create Questions:
            </Typography>
            {Array(qnum).fill(1).map((item, key) =>
                <Box key={key} mt={4}>
                    <Paper style={{ padding: "24px", backgroundColor: "#e3f2fd" }}>
                        <Typography variant="h6" gutterBottom>
                            {"Question" + (key + 1)}
                        </Typography>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"question" + (key + 1)}
                            label={"Question" + (key + 1)}
                            id={"question" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "question": e.target.value.trim(), } }}
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"option1" + (key + 1)}
                            label="Option1"
                            id={"option1" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "option1": e.target.value.trim(), } }}
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"option2" + (key + 1)}
                            label="Option2"
                            id={"option2" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "option2": e.target.value.trim(), } }}
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"option3" + (key + 1)}
                            label="Option3"
                            id={"option3" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "option3": e.target.value.trim(), } }}
                        />
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"option4" + (key + 1)}
                            label="Option4"
                            id={"option4" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "option4": e.target.value.trim(), } }}
                        />
                        <TextField
                            inputProps={{ type: 'number' }}
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"correct_option" + (key + 1)}
                            label="Correct Option Number"
                            id={"correct_option" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "correct_option": e.target.value.trim(), } }}
                        />
                        <TextField
                            inputProps={{ type: 'number' }}
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            name={"marks" + (key + 1)}
                            label="Marks"
                            id={"marks" + (key + 1)}
                            onChange={(e) => { questions[key] = { ...questions[key], "marks": e.target.value.trim(), } }}
                        />
                    </Paper>
                </Box>
            )}
            <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" style={{ marginTop: "16px", marginBottom: "24px" }}>
                CREATE
            </Button>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="Invalid Data, Please try again."
                key={transition ? transition.name : ''}
                className={classes.snackbar}
            />
        </Box>
    );
}

export default MakeQuestions;