<template>
    <div id="topbar" class="container">
        <div class="row" id="outer">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-3">
                        <input type="range" min="0" max="20" value="0" step="5" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <input type="range" min="0" max="20" value="0" step="5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#outer {
    min-height: 160px;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin: 0;
}

#topbar {
    padding: 0;
}
</style>
