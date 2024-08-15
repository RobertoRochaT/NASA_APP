export default function Footer(props) {
    const { showModal, handleToggleModal,data} = props;

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>{data?.title}</h1>
                <h2>APOD PROJECT</h2>
            </div>
            {!showModal && (
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            )}
        </footer>
    );
}
