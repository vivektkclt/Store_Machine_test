const getColor = (value: number) => {
  let remainder = value % 4;
  if (remainder === 1 || remainder === 0) {
    return '#FFE5F5';
  } else if (remainder === 2 || remainder === 3) {
    return '#EFF1FD';
  } else {
    // Handle other cases if needed
    return 'gray';
  }
};

export default getColor;
