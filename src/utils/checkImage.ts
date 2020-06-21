const checkImage = (path: string) => {
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => reject();
    img.src = path;
    return {
      path: img.src,
      load: img.onload,
    };
  });
};

export { checkImage };
