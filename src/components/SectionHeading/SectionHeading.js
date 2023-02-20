import './SectionHeading.css';
const SectionHeading = (props) => {
    return (
        <div className='heading'>
            <h3 className="text-center mb-4">{props.heading}</h3>
        </div>
    );
};

export default SectionHeading;