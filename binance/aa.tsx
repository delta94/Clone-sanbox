

const NoRecordsFound = i().memo((props) => {
    const { t } = Gr.$();
    const { isLight } = Fg();
    return (
        <Br.Z textAlign="center" paddingTop="60px" width="100%" margin="auto">
            {isLight ? <ql.Z size={96} /> : <Kl.Z size={96} />}
            <Kr.Z variant="body2" color="t.third" my="md">
                {t("noRecordsFound", { defaultValue: "No records found" })}
            </Kr.Z>
        </Br.Z>
    );
});