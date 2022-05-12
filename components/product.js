import { Card, Avatar, Button, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { axiosInstance } from "../axios.js";
import { useStripe } from "@stripe/react-stripe-js";

const ProductCard = ({ productData }) => {
  const stripe = useStripe();

  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <Image
          height={318}
          width={318}
          src={productData.image}
          alt={productData.title}
        />
      }
    >
      <Typography.Title level={5} style={{ margin: 0 }}>
        {productData.title}
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
        $ {productData.price}
      </Typography.Title>
      <Button
        type="primary"
        block
        // loading={isLoading}
        onClick={async () => {
          try {
            const res = await axiosInstance.post(
              "/payments/create-checkout-session/",
              {
                stripe_product_id: productData.stripe_product_id,
                product_tag: productData.tag,
              },
              {
                // withCredentials: true,
              }
            );
            if (res.status == 200) {
              console.log(stripe);

              if (productData.tag == "unlock_code_package") {
                return stripe.redirectToCheckout({
                  sessionId: res.data.data.session_id,
                });
              }
            }
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Purchase Unlocks Package
      </Button>
    </Card>
  );
};

export default ProductCard;
