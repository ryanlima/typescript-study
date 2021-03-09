// accountInfo
// chatInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "ryan",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Ryan",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 22,
  name: "ryan",
  nickname: "ryanlima",
  level: 100,
};
