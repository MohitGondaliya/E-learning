import React from "react";
import images from "../../assets/images";
import CartItem, { CartItemCard } from "../../shared/component/CartItem";
import { Button, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { ROUTES } from "../../shared/routes";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./../../assets/animation/empty-cart.json";
import CustomSnackbar from "../../shared/component/CustomSnackbar";

const OrderDetails: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItemCard[]>([
        {
            desktopAvatar: images.MobileappFlutterSquare,
            mobileAvatar: images.MobileappFlutterFull,
            level: 'Intermediate',
            access: 'Lifetime access',
            name: 'Mobile App Development with Flutter',
            rating: '4.5',
            reviewNumber: '2850',
            timing: 8,
            member: '5000',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Eleanor Pena',
            pricing: "79.99",
            deleteAction: true,
        },
        {
            desktopAvatar: images.GraphicDesignFull,
            mobileAvatar: images.GraphicDesignFull,
            level: 'Advance',
            access: '3 months access',
            name: 'Graphic Design for Beginners',
            rating: '4.5',
            reviewNumber: '6850',
            timing: 28,
            member: '7899',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Leslie Alexander',
            pricing: "59.99",
            deleteAction: true,
        },
        {
            desktopAvatar: images.PythonProgrammingSquare,
            mobileAvatar: images.PythonProgrammingFull,
            level: 'Advance',
            access: '3 months access',
            name: 'Data Science and Machine Learning',
            rating: '4.3',
            reviewNumber: '10850',
            timing: 18,
            member: '12560',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Wade Warren',
            pricing: "59.99",
            deleteAction: true,
        },
    ]);

    const navigate = useNavigate();
    const [removeItem, setRemoveItem] = React.useState(false);

    const handleDelete = (index: number) => {
        setTimeout(() => {
            const newCartItems = cartItems.filter((_, i) => i !== index);
            setCartItems(newCartItems);
            setRemoveItem(true)
        }, 800);
    };

    return (
        <>
            {cartItems.length ? (
                <div className="cart-main">
                    <CartItem cartItem={cartItems} onDelete={handleDelete} />
                </div>
            ) : (
                <div className="empty-block flex-grow-1 flex-column">
                    <Lottie className="lottie" animationData={EmptyCart} loop={false} />
                    <Typography variant="h5" className="fw-bold mb-1" color="text.primary">Your Cart is Empty</Typography>
                    <Typography variant="subtitle1" className="mb-2 text-center" color="text.secondary">It seems like you haven't selected any items yet. <br /> Start browsing to add your favorite courses!</Typography>
                    <Button variant="contained" color="primary" size="large" onClick={() => { navigate(ROUTES.Explore) }}>
                        Explore Courses
                    </Button>
                </div>
            )}

            <CustomSnackbar
                open={removeItem}
                onClose={() => setRemoveItem(false)}
                message="Course has been removed!"
                severity="success"
                autoHideDuration={2000}
            />
        </>
    )
}

export default OrderDetails;