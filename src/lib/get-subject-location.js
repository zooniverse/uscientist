const READABLE_FORMATS = {
  image: ['jpeg', 'png', 'svg+xml', 'gif'],
};

function getSubjectLocation(subject, frame = 0) {
  let format;
  let type;
  let src;

  const currentLocation = (subject && subject.locations) ? subject.locations[frame] : undefined;

  if (!currentLocation) return undefined;

  Object.keys(currentLocation).some((mimeType) => {
    src = currentLocation[mimeType];
    [type, format] = mimeType.split('/');
    const extensions = type || [];
    if (type in READABLE_FORMATS && READABLE_FORMATS[extensions].includes(format)) {
      return type;
    }
    return null;
  });
  return { type, format, src };
}

export {
  getSubjectLocation
};
