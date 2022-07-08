import { Container } from "@mui/material";
import React from "react";
import Image from "../images/aboutUs.jpeg";

const AboutUs = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}>
        <img
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
          src={Image}
        />

        <Container maxWidth="sm">
          Магазин сладостей Candy-Shop расположен в городе Бишкек и является
          одним из самых популярных заведений у детей и взрослых. Здесь
          представлен огромный ассортимент сладостей: леденцы, тянучки,
          сосательные конфеты, зефир, пастила, орехи засахаренные и в шоколаде,
          жвачки и многое другое. Заведение расположено на первом этаже
          небольшого дома и необыкновенно красиво обставлено: к входу ведет
          дорожка из леденцов на палочках, а внутри магазина нет ни одного
          свободного места на полках – везде сладости на любой вкус. Стены лавки
          со сладостями Candy-Shop пестрят яркими красками, привлекая к стендам
          с конфетами внимание. Каждый день в магазине работает аниматор,
          переодетый в милого зверя, который готов развлечь детей и помочь с
          выбором.
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
