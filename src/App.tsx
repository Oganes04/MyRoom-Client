import { Box } from "@mui/material";
import PWABadge from "./PWABadge";
import MyRoomCounter from "./components/MyRoomCounter";
import YesNoButton from "./components/YesNoButton";
import MoreDetailsButton from "./components/MoreDetailsButton";
import ConfirmButton from "./components/ConfirmButton";
import AddButton from "./components/AddButton";
import CartButton from "./components/CartButton";
import MoreInfoButton from "./components/MoreInfoButton";

function App() {
  return (
    <Box>
      <PWABadge />
      {/* В этом счётчик мы передаём функцию, котоорая принимает в качестве аргумента число */}
      <MyRoomCounter onCounterChange={(value) => console.log(value)} />

      {/* Тут, чтобы получить кнопку со словом "Нет" и с белым фоном нужно передать no. 
      Странно конечно, я бы просто по ходу вёрстки блоков делал, но раз уж он есть в дизайне то вот сделал */}
      <YesNoButton onClick={() => console.log(12)} />

      {/* dark: делает фон тёмным */}
      <MoreDetailsButton dark onClick={() => console.log(12)} />

      {/* dark: делает фон тёмным
          small: уменьшает кнопку 
          ТОЖЕ ХЗ зачем */}
      <ConfirmButton dark small onClick={() => console.log(12)} />

      {/* onAdd: меняем блок под добавление товара
          onAbort: отменяем выбор товара */}
      <AddButton
        onAdd={() => console.log(12)}
        onAbort={() => console.log(11)}
      />

      {/* itemsCount: число в красном круге, если больше 100 заменяется на троеточие */}
      <CartButton onClick={() => console.log(12)} itemsCount={1} />

      {/* Этот компонент тоже странный, там 4 кнопки отличаются на пару пикселей размером
          Я сделал перечисление ECategory (чекнешь в enums.ts) и распределил размеры по категориям где кнопки используются */}
      <MoreInfoButton category="cars" onClick={() => console.log(12)} />
    </Box>
  );
}

export default App;
