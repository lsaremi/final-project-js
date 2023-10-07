export const red1 = "rgb(251, 0, 83)";
export const red2 = "rgb(179, 146, 231)";
export const green1 = "rgb(32, 233, 104)";
export const green2 = "rgb(13, 167, 236)";

export function showToast(text, color1, color2) {
  Toastify({
    text,
    duration: 3000,
    className: "",
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: `linear-gradient(89.1deg, ${color1} 15.2%,${color2}  98.5%)`,
      width: "80%",
      borderRadius: "10px",
      textAlign: "center",
    },
  }).showToast();
}
