// @desc get all bootcamps
// @route GET /api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

// @desc get single botcamp
// @route GET /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, mgs: `get bootcamp ${req.params.id}` });
};

// @desc create new bootcamp
// @route POST /api/v1/bootcamps/:id
// @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create new bootcamp' });
};

// @desc update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
