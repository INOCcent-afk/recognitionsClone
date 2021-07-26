export const isIndividual = (router: string | string[] | undefined) => {
  const path = router === "say-thanks";

  return path;
};

export const isTeam = (router: string | string[] | undefined) => {
  const path = router === "say-thanks-team";

  return path;
};

export const isStore = (router: string | string[] | undefined) => {
  const path = router === "say-thanks-group";

  return path;
};
