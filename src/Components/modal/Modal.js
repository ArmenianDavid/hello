import React from "react";
// material ui
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { Button } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        modalTitle: {
            textAlign: "center",
        },
    })
);

export default function TransitionsModal({ handleSubmit, points }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        handleSubmit();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleOpen}
            >
                Submit
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2
                            id="transition-modal-title"
                            className={classes.modalTitle}
                        >
                            Nice work
                        </h2>
                        <p id="transition-modal-description">
                            You gain{" "}
                            <span style={{ fontSize: "25px", color: "blue" }}>
                                {points}
                            </span>{" "}
                            <span>{points > 1 ? "points !!" : "point !!"}</span>
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
