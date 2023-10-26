export default function theme() {
  return {
    token: {
      // Seed Token
      colorPrimary: "#00b96b",
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },
    components: {
      Button: {
        colorPrimary: "#00b96b",
        algorithm: true, // Enable algorithm
      },
      Input: {
        colorPrimary: "#eb2f96",
        algorithm: true, // Enable algorithm
      },
    },
  };
}
