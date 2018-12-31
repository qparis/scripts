include(["engines", "wine", "quick_script", "uplay_script"]);

var installerImplementation = {
    run: function () {
        new GogScript()
            .name("Beyond Good and Evil™")
            .applicationHomepage("http://store.ubi.com/de/beyond-good-and-evil/56c4948388a7e300458b470a.html")
            .editor("Ubisoft")
            .author("Plata")
            .appId(232)
            .wineVersion(LATEST_STAGING_VERSION)
            .wineDistribution("staging")
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
