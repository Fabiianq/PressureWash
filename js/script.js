function switchImage(imgId, beforeSrc, afterSrc) {
    const img = document.getElementById(imgId);
    img.src = img.src === beforeSrc ? afterSrc : beforeSrc;
}
