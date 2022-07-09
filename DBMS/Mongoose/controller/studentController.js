const studentController = async (req, res) => {
    const { studentName } = req.params;
    try {
        const studentData = await studentModel.findOne({age: {$lt: 20}});
        res.status(200).send(studentData);
    }
    catch (err){
        res.status(404).send(err);
    }
}

module.exports = studentController;