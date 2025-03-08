import { useGameConfig } from "./useGameConfig";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", () => {
  const squares = reactive(new Array(9));
  const turn = ref(false);
  const { mark, wins } = useGameConfig();
  const playStatus = ref(false);

  const start = () => {
    Object.assign(squares, new Array(9))
    playStatus.value = false;
    turn.value = false;
  };

  const play = (square) => {
    if (!squares[square]) {
      const T = mark[turn.value ? 1 : 0];
      squares[square] = T;
      if (checkBoard(T)) {
        playStatus.value = true;
      } else {
        turn.value = !turn.value;
      }
    }
  };

  const checkBoard = (character) => {
    const status = squares
      .map((square, index) => (square === character ? index : undefined))
      .filter((squar) => squar != undefined);

    return wins.some((win) => win.every((num) => status.includes(num)));
  };

  return { squares, play, start };
});
