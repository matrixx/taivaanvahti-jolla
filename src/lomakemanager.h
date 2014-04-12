#ifndef LOMAKEMANAGER_H
#define LOMAKEMANAGER_H

#include <QObject>
#include <QNetworkAccessManager>

class LomakeManager : public QObject
{
    Q_OBJECT
public:
    explicit LomakeManager(QObject *parent = 0);
    Q_INVOKABLE void haeLomake(const int& id);
signals:
    Q_INVOKABLE void lomakeSaatavilla(const QString& replyString);

public slots:
    void lomakeVastaanotettu();

private:
    QNetworkAccessManager mNam;
};

#endif // LOMAKEMANAGER_H
